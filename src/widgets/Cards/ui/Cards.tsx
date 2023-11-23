import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Card from '../Card'


import { CardsProps } from './Cards.interface'
import styles from './Cards.module.css'

interface CardType {
  id: string;
  content: string;
}

interface ColumnType {
  id: string;
  title: string;
  cards: CardType[];
}


const Cards: FC<CardsProps> = ({ initialColumns }) => {

  const [columns, setColumns] = useState<ColumnType[]>(initialColumns);


  const onDragEnd = (result: any) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId && source.index === destination.index) {
      return;
    }

    const sourceColumn: ColumnType = columns.find((column) => column.id === source.droppableId) as ColumnType;
    const destinationColumn: ColumnType = columns.find((column) => column.id === destination.droppableId) as ColumnType;

    const newSourceCards: CardType[] = Array.from(sourceColumn?.cards as CardType[])
    const [removedCard] = newSourceCards.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      newSourceCards.splice(destination.index, 0, removedCard);

      const newColumn: ColumnType = {
        ...sourceColumn,
        cards: newSourceCards,
      };

      setColumns(columns.map(column => column.id === newColumn.id ? newColumn : column))
    } else {
      const newDestinationCards: CardType[] = Array.from(destinationColumn.cards);
      newDestinationCards.splice(destination.index, 0, removedCard);


      const newSourceColumn: ColumnType = {
        ...sourceColumn,
        cards: newSourceCards
      }

      const newDestinationColumn: ColumnType = {
        ...destinationColumn,
        cards: newDestinationCards
      }


      setColumns(columns.map(column => {
        if (column.id === newSourceColumn.id) return newSourceColumn;
        if (column.id === newDestinationColumn.id) return newDestinationColumn;
        return column
      }))
    }
  }


  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.cards}>
        {
          columns.map((col, index) => {
            return (
              <Droppable droppableId={col.id} key={col.id}>
                {
                  (provided) => {
                    console.log(provided)
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