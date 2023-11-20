import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
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


  const onDragEnd = () => {

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
                    return (
                      <Card 
                      {...provided.droppableProps}
                      ref={provided.innerRef}
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