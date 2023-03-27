import { Component } from '@angular/core';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {
    Name: string = '';
    LastName: string = '';
    UserName: string = '';
    Email: string = '';
    Password: string = '';
    Birthday: Date | null = null;
    Phone: string = '';
    Adress: string = '';
    profilePhoto: File| null = null;



 
  
constructor(private registerService : RegisterService) { }

handleFileInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    this.profilePhoto = files[0];
  }
  
  
onSubmit() {
    const formData = new FormData();
    formData.append('Name', this.Name);
    formData.append('LastName', this.LastName);
    formData.append('UserName', this.UserName);
    formData.append('Email', this.Email);
    formData.append('Password', this.Password);
    formData.append('Birthday', this.Birthday ? this.Birthday.toString() : '');
    formData.append('Phone', this.Phone);
    formData.append('Adress', this.Adress);
    if (this.profilePhoto) {
        formData.append('profilePhoto', this.profilePhoto);
      }

    
    this.registerService.Register(formData).subscribe(
      response => {
        alert('Usuario Creado Correctamente')
        // Aquí puedes redirigir al usuario a otra página, mostrar un mensaje de éxito, etc.
      },
      error => {
        alert('No se Pudo Crear el Usuario' + error);
        // Aquí puedes mostrar un mensaje de error, hacer algo para manejar el error, etc.
      }
    );
  }
  
  


}  
