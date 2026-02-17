import { Board } from '../core/Board';
export declare class LayoutFactory {
    /**
     * The classic 19-hex Catan board
     */
    static createStandard(board: Board): void;
    /**
     * For the Agent: A completely random or elongated board
     */
    static createRectangle(board: Board, width: number, height: number): void;
}
//# sourceMappingURL=LayoutFactory.d.ts.map