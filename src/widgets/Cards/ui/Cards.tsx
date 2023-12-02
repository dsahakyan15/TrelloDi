import { FC, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { FaPlus } from 'react-icons/fa6'
import Card from '../Card'
import { column, task } from 'entitles/redux/interfaces';


import styles from './Cards.module.css'
import { RootState } from 'entitles/redux/store';



import { createColumn, fetchBoard, fetchBoards } from "entitles/redux/blogSlice"
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';

interface ColumnType {
  id: string;
  title: string;
  tasks: task[];
}


const Cards: FC = () => {

  const [searchParams] = useSearchParams()
  const boardId = searchParams.get("boardId")
  const dispatch = useAppDispatch();
  const board = useSelector((state: any) => {
    return state.blog.boards.find((board: any) => board?.id === boardId)
  })

  const loading = useSelector((state: RootState) => {
    return state.blog.loading
  })

  const error = useSelector((state: RootState) => {
    return state.blog.error
  })
  useEffect(() => {
    if (boardId && !board) {
      dispatch(fetchBoard({boardId}))
    }
  }, [dispatch, board, boardId])

const temp = useSelector((state: RootState)=>state.blog.boards)
debugger
  const [columns, setColumns] = useState<column[]>(board?.columns as column[]);
  console.log(columns);
  
  useEffect(()=>{
    // setColumns(temp)
  },[temp])
  const [isAddTask, setIsAddTask] = useState<Boolean>(false)
  const [newColNameValue, setNewColNameValue] = useState<string>('')

  const onNewColNamed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColNameValue(event.target.value)
  }
  const addNewCol = async () => {
    // debugger
    if (newColNameValue.trim()) {
     await dispatch(createColumn({
        title: newColNameValue,
        tasks: [],
        boardId:boardId
      }))
      if(boardId)
     await dispatch(fetchBoard({boardId}))

      setNewColNameValue('')
      setIsAddTask(false)
    }

  }
  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn: ColumnType = columns?.find((column) => column.id === source.droppableId) as ColumnType;
    const destinationColumn: ColumnType = columns?.find((column) => column.id === destination.droppableId) as ColumnType;

    const newSourceCards: task[] = Array.from(sourceColumn?.tasks as task[])
    const [removedCard] = newSourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      newSourceCards.splice(destination.index, 0, removedCard);

      const newColumn: ColumnType = {
        ...sourceColumn,
        tasks: newSourceCards,
      };

      if (columns)
        setColumns(columns.map(column => column.id === newColumn.id ? newColumn : column))
    } else {
      const newDestinationCards: task[] = Array.from(destinationColumn.tasks);
      newDestinationCards.splice(destination.index, 0, removedCard);


      const newSourceColumn: ColumnType = {
        ...sourceColumn,
        tasks: newSourceCards
      }

      const newDestinationColumn: ColumnType = {
        ...destinationColumn,
        tasks: newDestinationCards
      }
      // TODO
      if (columns)
        setColumns(columns.map(column => {
          if (column.id === newSourceColumn.id) return newSourceColumn;
          if (column.id === newDestinationColumn.id) return newDestinationColumn;
          return column
        }))
    }
  }


  return (
    <>{
      loading || error ?
        <p>Loading... {error ? error : null}</p>
        :
        <DragDropContext onDragEnd={onDragEnd}>
          <div className={styles.tasks}>
            {
              columns?.map((col, index) => {
                debugger
                
                return (
                  <Droppable droppableId={`${index}`} key={`${index}`}>
                    {
                      (provided) => {
                        return (
                          <Card
                            provided={provided}
                            col={col}
                            boardId={boardId}
                          />
                        )
                      }
                    }
                  </Droppable>
                )
              })
            }

            {
              !isAddTask ?
                <div className={styles.newColumnOpened}>
                  <input
                    onChange={onNewColNamed}
                    value={newColNameValue}
                    placeholder='Add new Column'
                    type="text" />
                  <button
                    onClick={addNewCol}>Create</button>
                </div>
                :
                <div
                  onClick={() => setIsAddTask(true)}
                  className={styles.newColumn}>
                  <span
                    className={styles.plus}>
                    <FaPlus />
                  </span>
                  <span
                    className={styles.newColumnText}>
                    Add another list
                  </span>
                </div>
            }
          </div>

        </DragDropContext>

    }</>

  )
}
export default Cards