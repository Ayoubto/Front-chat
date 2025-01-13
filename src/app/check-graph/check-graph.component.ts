import { Component } from '@angular/core';
import { GraphServiceService } from '../services/graph-service.service';

@Component({
  selector: 'app-check-graph',
  templateUrl: './check-graph.component.html',
  styleUrls: ['./check-graph.component.css']
})
export class CheckGraphComponent {
  edges: number[][] = [];
  initialInfected: number[] = [];
  initialInfectedInput: string = '[2]'; // Pour le textarea
  nodeThresholds: { [key: string]: number } = {};
  imageUrl : any;
 constructor(private dataService: GraphServiceService){}
  // Récupérer les clés d'un objet
  objectKeys(obj: { [key: number]: number }): string[] {
    return Object.keys(obj);
  }

  // Ajouter une relation (edge)
  addEdge(node1: number, node2: number, weight: number): void {
    this.edges.push([node1, node2, weight]);
  }

  // Supprimer une relation (edge)
  removeEdge(index: number): void {
    this.edges.splice(index, 1);
  }

  // Ajouter un seuil pour un nœud
  addThreshold(node: number, threshold: number): void {
    this.nodeThresholds[node] = threshold;
  }

  // Supprimer un seuil pour un nœud
  removeThreshold(node: string): void {
    delete this.nodeThresholds[+node];
  }

  submitForm(): void {
    try {
      this.initialInfected = JSON.parse(this.initialInfectedInput);
  
      if (!Array.isArray(this.initialInfected) || !this.initialInfected.every(Number.isInteger)) {
        throw new Error('Invalid format for initial infected nodes');
      }
  
      if (this.initialInfected.length === 1) {
        this.initialInfected = [this.initialInfected[0]];
      }
    } catch (error) {
      alert('Invalid format for initial infected nodes. Please enter a valid JSON array of integers.');
      return;
    }
  
    const formattedNodeThresholds: { [key: string]: number } = {};
    for (const key in this.nodeThresholds) {
      if (Object.prototype.hasOwnProperty.call(this.nodeThresholds, key)) {
        formattedNodeThresholds[key.toString()] = this.nodeThresholds[key];
      }
    }
  
    const result = {
      edges: this.edges,
      initial_infected: this.initialInfected,
      node_thresholds: formattedNodeThresholds
    };
  
    this.dataService.submitData(this.edges, this.initialInfected, this.nodeThresholds).subscribe({
      next: (response) => {
        if (response instanceof Blob) {
          const url = URL.createObjectURL(response);
          this.imageUrl = url;  // Assign the image URL for display
        } else if (typeof response === 'string') {
          this.imageUrl = response;  // If the response is already a string URL
        } else {
          console.error('Unexpected response format');
        }
      },
      error: (err) => {
        console.error('Error sending data to API:', err);
        alert('Failed to send data to the API.');
      },
    });
  
    console.log('Formatted Data for Postman:', JSON.stringify(result, null, 2));
    alert('Data formatted and ready for Postman! Check console for details.');
  }
  
  

}
