import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products:any=[]
  public grandTotal!:number
  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res=>{
      this.products=res;
      this.grandTotal=this.cart.getTotalPrice();
    })
  }
  removeItem(item : any){
    this.cart.removeCartItem(item);
  }
  emptycart(){
    this.cart.removeAllCart();
  }
}
