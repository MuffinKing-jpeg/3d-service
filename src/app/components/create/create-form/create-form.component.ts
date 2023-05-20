import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormControl, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import Materials from '../../../config/materials.json';
import {AsYouType} from 'libphonenumber-js';
import {phoneNumberIsValid} from './numberValidator';
import {environment} from '../../../../environments/environment';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {NpDepotInterface} from '../../../interfaces/npDepot.interface';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss'],
})
export class CreateFormComponent implements OnInit {
  formData = new FormData();
  bsModalRef?: BsModalRef;
  @ViewChild('sendingModal', {static: true})
    sendingModal!: TemplateRef<any>;

  public materials = Materials;
  public selectedMaterial?: typeof Materials[0];


  isDev = environment.environment === 'dev';
  myForm?: UntypedFormGroup;

  firstName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern(/^[а-ї]+$/i),
    Validators.required,
    Validators.maxLength(24),
  ]);

  secondName = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
    Validators.pattern(/^[а-ї]+$/i),
    Validators.required,
    Validators.maxLength(24),
  ]);

  phoneNumberMain = new FormControl('', [
    Validators.minLength(9),
    Validators.required,
    Validators.maxLength(9),
    phoneNumberIsValid(),
  ]);

  telegram = new FormControl('', [
    Validators.pattern(/^@[a-zA-Z0-9_]+$/),
    Validators.minLength(5),
    Validators.maxLength(32),
  ]);

  email = new FormControl('', [
    Validators.email,
  ]);

  np = new FormControl('', [
    Validators.required,
  ]);
  description = new FormControl('');
  files = new FormControl(null);
  material = new FormControl(`${this.materials[0].name}`);
  numberInProcess = new AsYouType('UA');
  public chosenNP!: Observable<NpDepotInterface>;

  constructor(
    private formBuilder: UntypedFormBuilder,
    private http: HttpClient,
    private router: Router,
    private modalService?: BsModalService
  ) {
  }

  saveNpAddress = (data: any) => {
    if (data && data !== '') {
      this.np.setValue(
          data['CityDescription'] + ', Відділення №' + data['Number'],
          {emitEvent: false});
      this.chosenNP = new Observable((subscriber) => {
        subscriber.next(data);
      });
    }
  };

  npClick = (template: TemplateRef<any>) => {
    this.bsModalRef = this.modalService?.show(template, Object.assign({}, {class: 'modal-lg'}));
  };

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      material: this.material,
      firstName: this.firstName,
      secondName: this.secondName,
      phoneNumberMain: this.phoneNumberMain,
      telegram: this.telegram,
      email: this.email,
      np: this.np,
      description: this.description,
      files: this.files,

    });
    this.np.disable();
    this.selectedMaterial = this.searchMaterial(this.myForm.value?.['material']);

    this.myForm.valueChanges.subscribe((value) => {
      this.selectedMaterial = this.searchMaterial(value?.['material']);
      this.numberInProcess.input(value?.['phoneNumberMain']);
      console.log(value);
      const parsedNumber = this.numberInProcess.getNationalNumber();
      if (parsedNumber) {
        // this.files.setValue(file)
        this.phoneNumberMain.setValue(parsedNumber, {
          emitEvent: false,
        });
      }
      this.numberInProcess.reset();
    });
  }

  onFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (event && target.files) {
      for (let i = 0; i < target.files.length; i++) {
        this.formData.append('file', target.files[i]);
      }
    }
  };
  onSubmit = () => {
    if (this.telegram.value && this.telegram.value !== '') {
      this.formData
          .append('telegram_c', this.telegram.value);
    }
    if (this.phoneNumberMain.value) this.formData.append('phone_office', '+380' + this.phoneNumberMain.value);
    if (this.firstName.value && this.secondName.value) {
      this.formData.append(
          'name',
          this.firstName.value + ' ' + this.secondName.value
      );
    }
    if (this.description.value) this.formData.append('description', this.description.value);
    if (this.material.value) this.formData.append('material', this.material.value);
    const funcUrl = environment.environment === 'production' ?
      'https://us-central1-printspeed-3d.cloudfunctions.net/newApplication' :
      'http://127.0.0.1:5001/printspeed-3d/us-central1/newApplication';

    const upload$ = this.http.post(funcUrl, this.formData);
    this.modalService?.show(this.sendingModal, {
      animated: true,
      ignoreBackdropClick: true,
    });
    upload$.subscribe({
      next: (v) => {
        console.log(v);
        this.rerouteAfterUpdate(true, '');
      },
      error: (err: Error) => {
        this.rerouteAfterUpdate(false, err.name);
        console.log(err);
      },
    });
  };

  rerouteAfterUpdate = (success: boolean, status: string) => {
    this.modalService?.hide();
    this.router
        .navigateByUrl('/result', {
          state: {
            postFormSuccess: success,
            postFormResponse: status,
          },
        })
        .catch((err) => {
          console.log(err);
        });
  };


  private searchMaterial = (value: string) => {
    return this
        .materials
        .find(
            (o) => o.name == value
        );
  };
}
