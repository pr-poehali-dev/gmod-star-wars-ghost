import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

type Cell = 'empty' | 'ship' | 'hit' | 'miss';
type GamePhase = 'setup' | 'playing' | 'finished';

interface Ship {
  size: number;
  name: string;
}

const SHIPS: Ship[] = [
  { size: 4, name: 'Звёздный разрушитель' },
  { size: 3, name: 'Крейсер' },
  { size: 3, name: 'Крейсер' },
  { size: 2, name: 'Истребитель' },
  { size: 2, name: 'Истребитель' },
  { size: 2, name: 'Истребитель' },
  { size: 1, name: 'Перехватчик' },
  { size: 1, name: 'Перехватчик' },
  { size: 1, name: 'Перехватчик' },
  { size: 1, name: 'Перехватчик' },
];

const PLAYER_HIT_MESSAGES = [
  'Попал... повезло, солдат.',
  'Неплохой выстрел, новобранец.',
  'Точное попадание! Для новичка.',
  'Хм... может ты и научишься.',
  'Попал. Продолжай в том же духе.',
];

const PLAYER_MISS_MESSAGES = [
  'Промах, новобранец! Смотри как надо.',
  'Мимо. Работай над прицелом.',
  'Промахнулся. Типичный новобранец.',
  'Не туда стреляешь, солдат.',
  'Промах. Учись прицеливаться.',
];

const ENEMY_HIT_MESSAGES = [
  'Вот так работают профессионалы!',
  'Попал. Это опыт, солдат.',
  'Точное попадание! Так и надо.',
  'Видел? Вот как стреляют ветераны.',
  'Попал в цель. Учись.',
];

const ENEMY_MISS_MESSAGES = [
  'Промахнулся... Твой ход, солдат.',
  'Мимо. Везёт тебе, новобранец.',
  'Не попал... бывает.',
  'Промах. Твоя очередь.',
  'Не в этот раз. Стреляй.',
];

export const BattleshipGame = ({ onClose, onMessage }: { onClose: () => void, onMessage: (msg: string) => void }) => {
  const [playerBoard, setPlayerBoard] = useState<Cell[][]>([]);
  const [enemyBoard, setEnemyBoard] = useState<Cell[][]>([]);
  const [enemyShipsBoard, setEnemyShipsBoard] = useState<Cell[][]>([]);
  const [phase, setPhase] = useState<GamePhase>('setup');
  const [currentShipIndex, setCurrentShipIndex] = useState(0);
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [curatorMessage, setCuratorMessage] = useState('Расставь свои корабли, солдат.');
  const [playerShipsLeft, setPlayerShipsLeft] = useState(10);
  const [enemyShipsLeft, setEnemyShipsLeft] = useState(10);
  const [lastHit, setLastHit] = useState<{x: number, y: number} | null>(null);
  const [huntMode, setHuntMode] = useState(false);
  const [huntDirection, setHuntDirection] = useState<'up' | 'down' | 'left' | 'right' | null>(null);

  useEffect(() => {
    const emptyBoard = Array(10).fill(null).map(() => Array(10).fill('empty'));
    setPlayerBoard(emptyBoard);
    setEnemyBoard(Array(10).fill(null).map(() => Array(10).fill('empty')));
    
    const enemyShips = placeShipsRandomly();
    setEnemyShipsBoard(enemyShips);
    
    onMessage('Расставь свои корабли, солдат.');
  }, []);

  const placeShipsRandomly = (): Cell[][] => {
    const board: Cell[][] = Array(10).fill(null).map(() => Array(10).fill('empty'));
    
    for (const ship of SHIPS) {
      let placed = false;
      while (!placed) {
        const horizontal = Math.random() > 0.5;
        const x = Math.floor(Math.random() * 10);
        const y = Math.floor(Math.random() * 10);
        
        if (canPlaceShip(board, x, y, ship.size, horizontal)) {
          placeShip(board, x, y, ship.size, horizontal);
          placed = true;
        }
      }
    }
    
    return board;
  };

  const canPlaceShip = (board: Cell[][], x: number, y: number, size: number, horizontal: boolean): boolean => {
    if (horizontal) {
      if (x + size > 10) return false;
      for (let i = x - 1; i <= x + size; i++) {
        for (let j = y - 1; j <= y + 1; j++) {
          if (i >= 0 && i < 10 && j >= 0 && j < 10 && board[j][i] === 'ship') {
            return false;
          }
        }
      }
    } else {
      if (y + size > 10) return false;
      for (let j = y - 1; j <= y + size; j++) {
        for (let i = x - 1; i <= x + 1; i++) {
          if (i >= 0 && i < 10 && j >= 0 && j < 10 && board[j][i] === 'ship') {
            return false;
          }
        }
      }
    }
    return true;
  };

  const placeShip = (board: Cell[][], x: number, y: number, size: number, horizontal: boolean) => {
    if (horizontal) {
      for (let i = 0; i < size; i++) {
        board[y][x + i] = 'ship';
      }
    } else {
      for (let i = 0; i < size; i++) {
        board[y + i][x] = 'ship';
      }
    }
  };

  const handlePlayerCellClick = (x: number, y: number) => {
    if (phase !== 'setup') return;
    
    const ship = SHIPS[currentShipIndex];
    const horizontal = true;
    
    if (canPlaceShip(playerBoard, x, y, ship.size, horizontal)) {
      const newBoard = playerBoard.map(row => [...row]);
      placeShip(newBoard, x, y, ship.size, horizontal);
      setPlayerBoard(newBoard);
      
      if (currentShipIndex < SHIPS.length - 1) {
        setCurrentShipIndex(currentShipIndex + 1);
        onMessage(`Расставь ${SHIPS[currentShipIndex + 1].name.toLowerCase()}, солдат.`);
      } else {
        setPhase('playing');
        onMessage('Начинаем, новобранец. Твой ход.');
      }
    }
  };

  const handleEnemyCellClick = (x: number, y: number) => {
    if (phase !== 'playing' || !isPlayerTurn || enemyBoard[y][x] !== 'empty') return;
    
    const newEnemyBoard = enemyBoard.map(row => [...row]);
    const isHit = enemyShipsBoard[y][x] === 'ship';
    
    newEnemyBoard[y][x] = isHit ? 'hit' : 'miss';
    setEnemyBoard(newEnemyBoard);
    
    if (isHit) {
      const randomMsg = PLAYER_HIT_MESSAGES[Math.floor(Math.random() * PLAYER_HIT_MESSAGES.length)];
      onMessage(randomMsg);
      const shipsLeft = countShips(newEnemyBoard, enemyShipsBoard);
      setEnemyShipsLeft(shipsLeft);
      
      if (shipsLeft === 0) {
        setPhase('finished');
        onMessage('Везунчик... В следующий раз не прокатит. Реванш?');
        return;
      }
    } else {
      const randomMsg = PLAYER_MISS_MESSAGES[Math.floor(Math.random() * PLAYER_MISS_MESSAGES.length)];
      onMessage(randomMsg);
    }
    
    setIsPlayerTurn(false);
    setTimeout(() => enemyTurn(), 1500);
  };

  const enemyTurn = () => {
    let x: number, y: number;
    
    if (huntMode && lastHit) {
      const targets = getAdjacentCells(lastHit.x, lastHit.y, playerBoard);
      if (targets.length > 0) {
        const target = targets[Math.floor(Math.random() * targets.length)];
        x = target.x;
        y = target.y;
      } else {
        setHuntMode(false);
        setLastHit(null);
        const randomCell = getRandomEmptyCell(playerBoard);
        if (!randomCell) return;
        x = randomCell.x;
        y = randomCell.y;
      }
    } else {
      const randomCell = getRandomEmptyCell(playerBoard);
      if (!randomCell) return;
      x = randomCell.x;
      y = randomCell.y;
    }
    
    const newPlayerBoard = playerBoard.map(row => [...row]);
    const isHit = newPlayerBoard[y][x] === 'ship';
    
    newPlayerBoard[y][x] = isHit ? 'hit' : 'miss';
    setPlayerBoard(newPlayerBoard);
    
    if (isHit) {
      const randomMsg = ENEMY_HIT_MESSAGES[Math.floor(Math.random() * ENEMY_HIT_MESSAGES.length)];
      onMessage(randomMsg);
      setLastHit({ x, y });
      setHuntMode(true);
      
      const shipsLeft = countPlayerShips(newPlayerBoard);
      setPlayerShipsLeft(shipsLeft);
      
      if (shipsLeft === 0) {
        setPhase('finished');
        onMessage('Вот так, солдат. Тренируйся ещё.');
        return;
      }
    } else {
      const randomMsg = ENEMY_MISS_MESSAGES[Math.floor(Math.random() * ENEMY_MISS_MESSAGES.length)];
      onMessage(randomMsg);
    }
    
    setIsPlayerTurn(true);
  };

  const getAdjacentCells = (x: number, y: number, board: Cell[][]) => {
    const adjacent = [];
    const directions = [
      { dx: 0, dy: -1 },
      { dx: 0, dy: 1 },
      { dx: -1, dy: 0 },
      { dx: 1, dy: 0 }
    ];
    
    for (const dir of directions) {
      const newX = x + dir.dx;
      const newY = y + dir.dy;
      if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10 && board[newY][newX] === 'empty') {
        adjacent.push({ x: newX, y: newY });
      }
    }
    
    return adjacent;
  };

  const getRandomEmptyCell = (board: Cell[][]) => {
    const emptyCells = [];
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (board[y][x] === 'empty' || board[y][x] === 'ship') {
          emptyCells.push({ x, y });
        }
      }
    }
    return emptyCells.length > 0 ? emptyCells[Math.floor(Math.random() * emptyCells.length)] : null;
  };

  const countShips = (visibleBoard: Cell[][], actualShips: Cell[][]) => {
    let ships = 0;
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (actualShips[y][x] === 'ship' && visibleBoard[y][x] !== 'hit') {
          ships++;
        }
      }
    }
    return ships;
  };

  const countPlayerShips = (board: Cell[][]) => {
    let ships = 0;
    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        if (board[y][x] === 'ship') {
          ships++;
        }
      }
    }
    return ships;
  };

  const autoPlaceShips = () => {
    const newBoard = placeShipsRandomly();
    setPlayerBoard(newBoard);
    setCurrentShipIndex(SHIPS.length);
    setPhase('playing');
    onMessage('Начинаем, новобранец. Твой ход.');
  };

  const resetGame = () => {
    const emptyBoard = Array(10).fill(null).map(() => Array(10).fill('empty'));
    setPlayerBoard(emptyBoard);
    setEnemyBoard(Array(10).fill(null).map(() => Array(10).fill('empty')));
    setEnemyShipsBoard(placeShipsRandomly());
    setPhase('setup');
    setCurrentShipIndex(0);
    setIsPlayerTurn(true);
    onMessage('Расставь свои корабли, солдат.');
    setPlayerShipsLeft(10);
    setEnemyShipsLeft(10);
    setLastHit(null);
    setHuntMode(false);
  };

  const getCellColor = (cell: Cell, isPlayer: boolean) => {
    if (cell === 'hit') return 'bg-orange-500';
    if (cell === 'miss') return 'bg-cyan-500/30';
    if (cell === 'ship' && isPlayer) return 'bg-black';
    return 'bg-black hover:bg-gray-900';
  };

  return (
    <div className="fixed left-8 bottom-24 z-40 animate-slide-from-left">
      <div className="bg-gradient-to-br from-gray-900 to-black border-4 border-cyan-500/80 rounded-2xl p-5 w-[480px] shadow-2xl shadow-cyan-500/30 relative">
        <div className="absolute top-3 right-3">
          <button onClick={onClose} className="text-cyan-400 hover:text-cyan-300">
            <Icon name="X" size={20} />
          </button>
        </div>
        <div className="text-center mb-3">
          <h2 className="text-lg font-mono font-bold text-white">ЗВЁЗДНЫЙ БОЙ</h2>
        </div>

        {phase === 'setup' && (
          <div className="text-center mb-3">
            <button
              onClick={autoPlaceShips}
              className="bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-1 rounded-lg text-sm font-semibold transition-colors"
            >
              Авто-расстановка
            </button>
          </div>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono text-white">Твоё поле</h3>
              <div className="text-white font-mono text-xs">Кораблей: {playerShipsLeft}</div>
            </div>
            <div className="inline-grid grid-cols-10 gap-[1px] bg-white p-[2px] rounded">
              {playerBoard.map((row, y) =>
                row.map((cell, x) => (
                  <button
                    key={`player-${x}-${y}`}
                    onClick={() => handlePlayerCellClick(x, y)}
                    disabled={phase !== 'setup'}
                    className={`w-5 h-5 transition-colors ${getCellColor(cell, true)} ${
                      phase === 'setup' ? 'cursor-pointer' : 'cursor-not-allowed'
                    }`}
                  >
                    {cell === 'hit' && <Icon name="Flame" size={12} className="text-orange-300" />}
                    {cell === 'miss' && <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full mx-auto animate-pulse" />}
                    {cell === 'ship' && <div className="text-[8px]">🚀</div>}
                  </button>
                ))
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xs font-mono text-white">Поле куратора</h3>
              <div className="text-white font-mono text-xs">Кораблей: {enemyShipsLeft}</div>
            </div>
            <div className="inline-grid grid-cols-10 gap-[1px] bg-white p-[2px] rounded">
              {enemyBoard.map((row, y) =>
                row.map((cell, x) => (
                  <button
                    key={`enemy-${x}-${y}`}
                    onClick={() => handleEnemyCellClick(x, y)}
                    disabled={phase !== 'playing' || !isPlayerTurn || cell !== 'empty'}
                    className={`w-5 h-5 transition-colors ${getCellColor(cell, false)} ${
                      phase === 'playing' && isPlayerTurn && cell === 'empty' ? 'cursor-crosshair' : 'cursor-not-allowed'
                    }`}
                  >
                    {cell === 'hit' && <Icon name="Flame" size={12} className="text-orange-300" />}
                    {cell === 'miss' && <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full mx-auto animate-pulse" />}
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {phase === 'finished' && (
          <div className="mt-3 text-center">
            <button
              onClick={resetGame}
              className="bg-cyan-700 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Реванш
            </button>
          </div>
        )}

        <div className="mt-3 text-center">
          <button
            onClick={onClose}
            className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold"
          >
            Сдаться
          </button>
        </div>
      </div>
    </div>
  );
};