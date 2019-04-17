import {FlatTreeControl} from '@angular/cdk/tree';
import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {CurriculumService} from '../../services/сurriculum.service';

interface GradeNode {
  name: string;
  id: string;
  description: string;
  lessonInfo?: GradeNode[];
}

interface FlatNode {
  expandable: boolean;
  name: string;
  level: number;
  id: string;
}

@Component({
  selector: 'app-curriculum',
  templateUrl: 'curriculum.component.html',
  styleUrls: ['curriculum.component.scss'],
})

export class CurriculumComponent implements OnInit, AfterViewInit {

  private transformer = (node: GradeNode, level: number) => {
    return {
      expandable: !!node.lessonInfo && node.lessonInfo.length > 0,
      name: node.name,
      level: level,
      description: node.description,
      id: node.id,
      lessonInfo: node.lessonInfo
    };
  };

  treeControl = new FlatTreeControl<FlatNode>(
    node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
    this.transformer, node => node.level, node => node.expandable, node => node.lessonInfo);


  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(private curriculumApiService: CurriculumService) {
  }

  ngOnInit() {
    this.curriculumApiService.getGrades().then((res) => {
      this.dataSource.data = res;
      this.tree.treeControl.expandAll();
    });
  }

  hasChild = (_: number, node: FlatNode) => node.expandable;

  @ViewChild('tree') tree;

  ngAfterViewInit() {
    this.tree.treeControl.expandAll();
  }
}
