import {https} from 'firebase-functions';
import express from 'express';
import {getBoundary, parse} from 'parse-multipart-data';
import {FieldInterface} from '../interfaces/field.interface';
import {fileUpload} from '../utility/fileUpload';
import {searchAccount} from '../crm/searchAccount';
import {transform} from '../utility/fieldsTransform';
import {randomUUID} from 'crypto';
import {crmAuth} from '../crm/crmAuth';
import {ResponseConfigInterface} from '../interfaces/responseConfig.interface';
import {updateAccount} from '../crm/updateAccount';

const app = express();
app.post('/', (req, res) => {
  const response = (config: ResponseConfigInterface) => {
    res
        .status(config.status)
        .send({
          status: config.status,
          data: config.data,
          message: config.msg,
        });
  };


  const ID = randomUUID();
  if (req.headers['content-type']) {
    const boundary = getBoundary(req.headers['content-type']);
    const body = req.body;
    const parts = parse(body, boundary);
    const files: FieldInterface[] = [];
    const fields: FieldInterface[] = [];
    for (let i = 0; i < parts.length; i++) {
            parts[i]['filename'] || parts[i]['type'] ?
                files.push(parts[i]) :
                fields.push(parts[i]);
    }

    crmAuth
        .login()
        .then(() => {
          Promise
              .all([
                fileUpload(files, ID),
                transform(fields)
                    .then((data) => searchAccount(data))
                    .then((data) => updateAccount(data, fields)),
              ])
              .then((data) => {
                response({
                  data: data,
                  msg: 'success',
                  status: 200,
                });
              })
              .catch((err) => {
                response({
                  data: err.response?.data ? err.response?.data : err.message,
                  msg: 'Something went wrong',
                  status: err.response?.status ? err.response?.status : 400,
                });
              });
        })
        .catch((err) => {
          response({
            data: err.response?.data ? err.response?.data : err.message,
            msg: 'Login fail',
            status: err.response?.status ? err.response?.status : 400,
          });
        });
  }
});

export const newApplication = https.onRequest(app);

