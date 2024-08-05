import { CanActivateFn, Router } from '@angular/router';
import { RoutCheckService } from './adminServices/rout-check.service';
import { inject } from '@angular/core';
import { ToastService } from './adminServices/toast.service';

export const authGuard: CanActivateFn = (route, state) => {
  //inject guard service file class
  const authService=inject(RoutCheckService)
  const toast=inject(ToastService)
  const rout=inject(Router)

  if(authService.isLoggedIn()){
    return true
  }
  else{
    toast.showWarning("Please login")
    rout.navigateByUrl("/login")
    return false
  }
};
