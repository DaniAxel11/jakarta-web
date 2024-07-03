import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule] 
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el formulario con controles vacíos', () => {
    expect(component.loginForm).toBeTruthy();
    expect(component.loginForm.controls['usuario'].value).toEqual('');
    expect(component.loginForm.controls['contraseña'].value).toEqual('');
  });

  it('debería marcar como inválido el formulario cuando está vacío', () => {
    component.loginForm.controls['usuario'].setValue('');
    component.loginForm.controls['contraseña'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('debería marcar como válido el formulario cuando está completo', () => {
    component.loginForm.controls['usuario'].setValue('usuarioPrueba');
    component.loginForm.controls['contraseña'].setValue('contraseña123');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('debería imprimir un mensaje de "Login attempt" cuando el formulario es válido', () => {
    spyOn(console, 'log');
    component.loginForm.controls['usuario'].setValue('usuarioPrueba');
    component.loginForm.controls['contraseña'].setValue('contraseña123');
    component.login();
    expect(console.log).toHaveBeenCalledWith('Login attempt:', { usuario: 'usuarioPrueba', contraseña: 'contraseña123' });
  });

  it('debería imprimir "Formulario no válido" cuando el formulario es inválido', () => {
    spyOn(console, 'log');
    component.loginForm.controls['usuario'].setValue('');
    component.loginForm.controls['contraseña'].setValue('');
    component.login();
    expect(console.log).toHaveBeenCalledWith('Formulario no válido');
  });
});
