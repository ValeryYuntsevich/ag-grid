import { Subject, Subscription } from 'rxjs';

export class GridRow {
  constructor(public checked = false) { }
}

export class GridApiMock {
  private subscriptions = { };

  selectionChanged = new Subject<void>();

  constructor(private gridRows?: GridRow[]) { }

  selectAll(): void {
    this.gridRows.forEach(row => row.checked = true);
  }

  deselectAll(): void {
    this.gridRows.forEach(row => row.checked = false);
  }

  getDisplayedRowCount() {
    return this.gridRows.length;
  }

  getSelectedNodes() {
    return this.gridRows.filter(row => row.checked);
  }

  getSelectedRows() {
    return this.gridRows.filter(row => row.checked);
  }

  addEventListener(eventType: string, listener: () => void): void {
    const event = this[eventType] as Subject<void>;
    const subscription = event.subscribe(() => listener());
    this.subscriptions[eventType] = subscription;
  }

  removeEventListener(eventType: string, listener: () => void): void {
    const subscription = this.subscriptions[eventType] as Subscription;
    if (subscription) {
      subscription.unsubscribe();
    }
  }
}

export class GridNodeMock {
  constructor(private selected: boolean = false) { }

  isSelected(): boolean {
    return this.selected;
  }

  setSelected(newValue: boolean): void {
    this.selected = newValue;
  }
}
