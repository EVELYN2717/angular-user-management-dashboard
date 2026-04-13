import { Component, OnInit  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit {

  isEdit = false;

  form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snack: MatSnackBar
  ) {}

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;

      // Simulación (luego puedes usar servicio real)
      this.form.patchValue({
        name: 'User Example',
        email: 'user@email.com'
      });
    }
  }

  submit() {
    if (this.form.valid) {
      this.snack.open(
        this.isEdit ? 'User updated!' : 'User created!',
        'Close',
        { duration: 3000 }
      );
    }
  }
}
