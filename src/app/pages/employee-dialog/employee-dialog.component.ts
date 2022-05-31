import { Component, OnInit,Inject } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from 'src/app/Services/api.service';
import { ManageEmployeeComponent } from '../manage-employee/manage-employee.component';

@Component({
  selector: 'app-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.scss']
})
export class EmployeeDialogComponent implements OnInit {

  empForm !:FormGroup;
  actionBtn : string="Save";
  constructor(private formBuilder: FormBuilder,private api:ApiService,@Inject(MAT_DIALOG_DATA) public editData :any,private dialog:MatDialogRef<ManageEmployeeComponent>) { }

  ngOnInit(): void {
    this.empForm=this.formBuilder.group({
      empName:['',Validators.required],
      empRole:['',Validators.required],
      Home:[false],
      manageEmp:[false],
      manageConst:[false],
      analyze:[false]
    });

    //console.log(this.editData);
    if(this.editData){
      this.actionBtn="Update";
      this.empForm.controls['empName'].setValue(this.editData.empName);
      this.empForm.controls['empRole'].setValue(this.editData.empRole);
      this.empForm.controls['Home'].setValue(this.editData.Home);
      this.empForm.controls['manageEmp'].setValue(this.editData.manageEmp);
      this.empForm.controls['manageConst'].setValue(this.editData.manageConst);
      this.empForm.controls['analyze'].setValue(this.editData.analyze);
    }
  }
  addEmp(){
   if(!this.editData){
    if(this.empForm.valid){
      this.api.postEmp(this.empForm.value)
      .subscribe({
        next:(res)=>{
          alert("Employee added successfully");
          this.empForm.reset();
          this.dialog.close("Saved");
        },
        error:()=>{
          alert("Error while adding employee");
        }
      })
    }
   }else{
     this.updateEmp();
   }
  }

  updateEmp(){
    this.api.putEmp(this.empForm.value,this.editData.id)
    .subscribe({
      next:(res)=>{
        alert("Employee updated successfully");
        this.empForm.reset();
        this.dialog.close('update');
      },
      error:()=>{
        alert("Error while updating the record");
      }
    })
  }

}
