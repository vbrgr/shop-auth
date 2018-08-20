import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CategoryService } from '../../services/category.service';
import { CustomFormsModule } from 'ng2-validation';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  categories$;
  product;
  itemsRef;
  id;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService) {
    this.itemsRef = categoryService.getCategories();
    this.categories$ = this.itemsRef.snapshotChanges().map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })));
      this.id = this.route.snapshot.paramMap.get('id');
      if (this.id) {
        this.productService.get(this.id).valueChanges().subscribe(p => this.product = p);
      }
   }

  ngOnInit() {
  }
  ngOnDestroy() {
  }
  save(product) {
    if (this.id) {
      this.productService.update(this.id, product);
    } else {
    this.productService.create(product);
    }
    this.router.navigate(['/admin/products']);
  }
  delete() {
    if (confirm('Are you sure you want to delete this product ?')) {
      this.productService.delete(this.id);
      this.router.navigate(['/admin/products']);
    }
  }

}
