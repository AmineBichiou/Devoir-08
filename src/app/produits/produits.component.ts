import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ActivatedRoute } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
})
export class ProduitsComponent implements OnInit {
  produits!: Produit[];
  constructor(private produitService: ProduitService,private router:Router,public authService: AuthService) {
    //this.produits = produitService.listeProduits();
    }

    ngOnInit(): void {
      this.produitService.listeProduit().subscribe(prods => {
      console.log(prods);
      this.produits = prods;
      });
      }
 /* supprimerProduit(p: Produit)
{
//console.log(p);
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p);
}
}*/
supprimerProduit(p: Produit)
{
let conf = confirm("Etes-vous sûr ?");
if (conf)
this.produitService.supprimerProduit(p.idProduit!).subscribe(() => {
console.log("produit supprimé");
this.SuprimerProduitDuTableau(p);
});
/*this.router.navigate(['produits']).then(() => {
window.location.reload();
});*/
}
SuprimerProduitDuTableau(prod : Produit) {
  this.produits.forEach((cur, index) => {
  if(prod.idProduit=== cur.idProduit) {
  this.produits.splice(index, 1);
  }
  });
  }
}
