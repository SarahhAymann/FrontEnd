import { Component, DoBootstrap } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ApiService } from 'src/app/services/api.service';
import { Data } from '@angular/router';
import { summaryData } from '../summary';

@Component({
  selector: 'app-dashboard-schema',
  templateUrl: './dashboard-schema.component.html',
  styleUrls: ['./dashboard-schema.component.scss']
})
export class DashboardSchemaComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cardLayout = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return {
          columns: 1,
          miniCard: { cols: 1, rows: 1 },
          chart: { cols: 1, rows: 2 },
          table: { cols: 1, rows: 4 },
        };
      }
 
     return {
        columns: 4,
        miniCard: { cols: 1, rows: 1 },
        chart: { cols: 2, rows: 2 },
        table: { cols: 4, rows: 4 },
      };
    })
  );

  miniCardData!: summaryData[];

  constructor(private breakpointObserver: BreakpointObserver,private service:ApiService) { }

  ngOnInit(): void {
    this.service.getData().subscribe({
      next:summaryData=>{
        this.miniCardData=summaryData;
      }
    })
  }
}
