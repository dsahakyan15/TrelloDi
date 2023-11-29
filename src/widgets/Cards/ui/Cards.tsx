import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from '../Card'
import { fetchBoards } from "entitles/redux/boardsSlice"
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'entitles/hooks/useAppDispatch';
import { column, task } from 'entitles/redux/interfaces';


import { CardsProps } from './Cards.interface'
import styles from './Cards.module.css'
import { RootState } from 'entitles/redux/store';


interface ColumnType {
  id: string;
  title: string;
  tasks: task[];
}


const Cards: FC<CardsProps> = ({ initialColumns }) => {

  const dispatch = useAppDispatch();
  const boards = useSelector((state: RootState) => {
    return state.boards
  })

  const loading = useSelector((state: RootState) => {
    return state.boards.loading
  })

  const error = useSelector((state: RootState) => {
    return state.boards.error
  })
  useEffect(() => {
    dispatch(fetchBoards())
    if(boards.error){

    }
    boards.error ? console.log(error, '-----') : console.log(boards);
    

  }, [dispatch])

  const [columns, setColumns] = useState<column[] | null>(initialColumns.columns);


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
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.tasks}>
        {
          columns?.map((col, index) => {
            return (
              <Droppable droppableId={col.id} key={col.id}>
                {
                  (provided) => {
                    return (
                      <Card
                        provided={provided}
                        col={col}
                      />
                    )
                  }
                }
              </Droppable>
            )
          })
        }
        <Link to="/desktop/taskmodal/1">
        </Link>
      </div>
    </DragDropContext>

  )
}
export default Cards