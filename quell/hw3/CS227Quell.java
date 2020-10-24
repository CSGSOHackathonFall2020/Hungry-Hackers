package hw3;

import java.util.ArrayList;

import api.Cell;
import api.CellState;
import api.Descriptor;
import api.Direction;
import api.StringUtil;

/**
 * Basic game state and operations for a simplified version of the video game 
 * "Quell".
 * @author Loh Xin Jun
 *
 */
public class CS227Quell
{
	private int moveCount=0;//for counting the number of moves
	private int originalRow=0;//the original row index of player
	private int originalCol=0;//the original column index of player 
	private int originalPearls=0;//original value of pearls
  /**
   * Two-dimensional array of Cell objects representing the 
   * grid on which the game is played.
   */
  private Cell[][] grid;
  
  /**
   * Instance of GameSupport to be used in the move() algorithm.
   */
  private GameSupport game_support;

  
  /**
   * Constructs a game from the given string description.  The conventions
   * for representing cell states as characters can be found in 
   * <code>StringUtil</code>.  
   * @param init
   *   string array describing initial cell states
   * @param support
   *   GameSupport instance to use in the <code>move</code> method
   */
  public CS227Quell(String[] init, GameSupport support)
  {
    grid = StringUtil.createFromStringArray(init);
    game_support = support;
    originalPearls=countPearls();
  }
  
  /**
   * Returns the number of columns in the grid.
   * @return
   *   width of the grid
   */
  public int getColumns()
  {
    return grid[0].length;
  }
  
  /**
   * Returns the number of rows in the grid.
   * @return
   *   height of the grid
   */
  public int getRows()
  {
    return grid.length;
  }
  
  /**
   * Returns the cell at the given row and column.
   * @param row
   *   row index for the cell
   * @param col
   *   column index for the cell
   * @return
   *   cell at given row and column
   */
  public Cell getCell(int row, int col)
  {
    return grid[row][col];
  }
  /**
   * Returns the row index for the player's current location.
   * @return
   * current row index for the player
   */
  public int getCurrentRow() {
	  int row=0;
	  for(int i=0; i<grid.length; i++) {
		  for(int j=0; j<grid[0].length; j++) {
			  if(grid[i][j].isPlayerPresent()) {
				  row=i;
			  }
		  }
	  }
	  return row;
  }
  
  /**
   * Returns the column index for the player's current location.
   * @return
   * current column index for the player
   */
  public int getCurrentColumn() {
	  int column=0;
	  for(int i=0; i<grid.length; i++) {
		  for(int j=0; j<grid[0].length; j++) {
			  if(grid[i][j].isPlayerPresent()) {
				  column=j;
			  }
		  }
	  }
	  return column;
  }
  
  /**
   * Returns true if the game is over, false otherwise.  The game ends when all pearls
   * are removed from the grid or when the player lands on a cell with spikes.
   * @return
   *   true if the game is over, false otherwise
   */
  public boolean isOver()
  {
	  if(countPearls()==0 || !isPlayerAlive()) {
		  return true;
	  }
    return false;
  }
  
  /**
   * Returns true if the game is over and the player did not die on spikes.
   * @return
   * true if the player wins, false otherwise
   */
  public boolean won() 
  {
	  if(isOver()==true && isPlayerAlive()==true) {
		  return true;
	  }
	  return false;
  }
  
  /**
   * Returns the current number of moves made in this game.
   * @return
   * number of moves made
   */
  public int getMoves() {
	  return moveCount;
  }
  
  /**
   * Returns the current score (number of pearls disappeared) for this game.
   * @return
   * current score
   */
  public int getScore() { 
	  return originalPearls-countPearls();
  }
  
  /**
   * Performs a move along a cell sequence in the given direction, updating the score, 
   * the move count, and all affected cells in the grid.  The method returns an 
   * array of Descriptor objects representing the cells in original cell sequence before 
   * modification, with their <code>movedTo</code> and <code>disappeared</code>
   * status set to indicate the cells' new locations after modification.  
   * @param dir
   *   direction of the move
   * @return
   *   array of Descriptor objects describing modified cells
   */
  public Descriptor[] move(Direction dir)
  {
	  moveCount++;
	  Cell[] arr=getCellSequence(dir);
	  Descriptor[] newArr=new Descriptor[arr.length];
	  for(int i=0; i<arr.length; i++) {
		  newArr[i]=new Descriptor(arr[i], i);
	  }
	    GameSupport support=new GameSupport();
	    support.shiftMovableBlocks(arr, newArr);
	    support.shiftPlayer(arr, newArr, dir);
	    setCellSequence(arr, dir);
	    System.out.println(getMoves()); 
	    System.out.println(getScore());
	    
    return newArr;
  }
  
  /**
   * Gets the cell sequence of the given direction, starting from player, ends at boundary cell.
   * @param dir
   * direction of the sequence
   * @return
   * array of cells in the cell sequence
   */
  public Cell[] getCellSequence(Direction dir) {
	  int row=getCurrentRow(), col=getCurrentColumn();
	  originalRow=row; originalCol=col;
	  ArrayList<Cell>result=new ArrayList<Cell>();
	  boolean portalJump=false, movable=false;
	  while(!CellState.isBoundary(grid[row][col].getState(), movable)) {
		  result.add(grid[row][col]);
		  int tempRow=getNextRow(row, col, dir, portalJump);
		  int tempCol=getNextColumn(row, col, dir, portalJump);
		  row=tempRow; col=tempCol;
		  if(CellState.isMovable(grid[row][col].getState())){
			  movable=true;
		  }
		  if(grid[row][col].getState()==CellState.PORTAL) {
			  result.add(grid[row][col]);
			  portalJump=true;
		  }
	  }
	  result.add(grid[row][col]);
	  Cell[] finalCell=result.toArray(new Cell[result.size()]);
	  return finalCell;
  }
  
  /**
   * Sets the given cell sequence and updates the player position.
   * @param cells
   * updated cells to replace existing ones in the sequence
   * @param dir
   * direction of the cell sequence
   */
  public void setCellSequence(Cell[] cells, Direction dir) {
	  int row=originalRow, col=originalCol;
	  int index=0; 
	  boolean portalJump=false, movable=false;
	  while(!CellState.isBoundary(grid[row][col].getState(), movable)) {
		  if(grid[row][col].getState()==CellState.PORTAL && cells[index].getState()==CellState.PORTAL) {
			  portalJump=true;
			  grid[row][col]=grid[row][col];
			  index++;
		  }
		  else {
			  grid[row][col]=cells[index];
		  }
		  int tempRow=getNextRow(row, col, dir, portalJump);
		  int tempCol=getNextColumn(row, col, dir, portalJump);
		  row=tempRow; col=tempCol;
		  index++;
	  }
	  grid[row][col]=cells[index];
  }
  
  /**
   * Helper method returns the next row for a cell sequence in the given direction, 
   * possibly wrapping around. If the flag doPortalJump is true, 
   * then the next row will be obtained by adding the cell's row offset. 
   * @param row
   * row for current cell
   * @param col
   * column for current cell
   * @param dir
   * direction
   * @param doPortalJump
   * true if the next cell should be based on a portal offset in case the current cell is a portal
   * @return
   * next row number in a cell sequence
   */
  public int getNextRow(int row, int col, Direction dir, boolean doPortalJump) {
	  int rowAfter=row;
	  if(doPortalJump) {
		  int afterTele=grid[row][col].getRowOffset();
		  rowAfter+=afterTele;
	  }
	  if(dir==Direction.UP) {
		  rowAfter-=1;
	  }
	  else if(dir==Direction.DOWN) {
		  rowAfter+=1;
	  }
	  if(rowAfter<0) {
		  rowAfter=getRows()-1;
	  }
	  else if(rowAfter>=getRows()) {
		  rowAfter=(rowAfter+1)%getRows();
	  }
	  return rowAfter;
  }
  /**
   * Helper method returns the next column for a cell sequence in the given direction, 
   * possibly wrapping around. If the flag doPortalJump is true, 
   * then the next column will be obtained by adding the cell's column offset.
   * @param row
   * row for current cell
   * @param col
   * column for current cell
   * @param dir
   * direction
   * @param doPortalJump
   * true if the next cell should be based on a portal offset in case the current cell is a portal
   * @return
   * next column number in a cell sequence
   */
  public int getNextColumn(int row, int col, Direction dir, boolean doPortalJump) {
	  int colAfter=col;
	  if(doPortalJump) {
		  int afterTele=grid[row][col].getColumnOffset();
		  colAfter+=afterTele;
	  }
	  if(dir==Direction.RIGHT) {
		  colAfter+=1;
	  }
	  else if(dir==Direction.LEFT) {
		  colAfter-=1;
	  }
	  if(colAfter<0) {
		  colAfter=getColumns()-1;
	  }
	  else if(colAfter>=getColumns()) {
		  colAfter=(colAfter+1)%getColumns();
	  }
	  return colAfter;
  }
  /**
   * Returns the number of pearls left in the grid.
   * @return
   * number of pearls in the grid
   */
  public int countPearls() {
	  int count=0;
	  for(int i=0; i<grid.length; i++) {
		  for(int j=0; j<grid[0].length; j++) {
			  if(grid[i][j].getState()==CellState.PEARL) {
			  count++;
			  }
		  }
	  }
	  return count;
  }
  /**
   * Helper method for determining whether player is present in the grid
   * @return
   * true if player is in the grid, false otherwise
   */
  private boolean isPlayerAlive() {
	  for(int i=0; i<grid.length; i++) {
		  for(int j=0; j<grid[0].length; j++) {
			  if(grid[i][j].isPlayerPresent()) {
				  return true;
			  }
		  }
	  }
	  return false;
  }
  
}
