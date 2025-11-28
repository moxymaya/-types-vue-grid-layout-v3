declare module "vue-grid-layout-v3" {
  import type { DefineComponent } from "vue";

  export interface GridItemInterface {
    i: string;
    x: number;
    y: number;
    w: number;
    h: number;
    minW?: number;
    maxW?: number;
    minH?: number;
    maxH?: number;
    minX?: number;
    maxX?: number;
    minY?: number;
    maxY?: number;
    static?: boolean;
    isDraggable?: boolean | null;
    isResizable?: boolean | null;
    isBounded?: boolean | null;
    dragIgnoreFrom?: string;
    dragAllowFrom?: string | null;
    resizeIgnoreFrom?: string;
    preserveAspectRatio?: boolean;
    dragOptions?: Record<string, unknown>;
    resizeOptions?: Record<string, unknown>;
  }

  export const GridLayout: DefineComponent<{
    layout: GridItemInterface[];
    colNum?: number;
    rowHeight?: number;
    maxRows?: number;
    margin?: number[];
    isDraggable?: boolean | null;
    isResizable?: boolean | null;
    isMirrored?: boolean;
    isBounded?: boolean | null;
    autoSize?: boolean;
    verticalCompact?: boolean;
    preventCollision?: boolean;
    useCssTransforms?: boolean;
    responsive?: boolean;
    responsiveLayouts?: Record<string, GridItemInterface[]>;
    transformScale?: number;
    restoreOnDrag?: boolean;
  }>;

  export const GridItem: DefineComponent<GridItemInterface>;
}
