import { ThemePalette } from '@angular/material/core';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

// 在 Component 類別外部宣告 enum
export enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

