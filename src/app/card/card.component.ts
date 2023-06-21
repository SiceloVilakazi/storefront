import { Component,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {


@Input() title='shoes';
@Input() price='100';
@Input() description='very nice shoe';
@Input() image = 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg'
}
