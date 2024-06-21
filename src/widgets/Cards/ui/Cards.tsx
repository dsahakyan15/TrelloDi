import { FC, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { FaPlus } from 'react-icons/fa6'
import Card from '../Card'
import { column, task } from 'entitles/redux/interfaces';


import styles from './Cards.module.css'
import { RootState } from 'entitles/redux/store';

import { useSelector } from 'react-redux';

interface ColumnType {
  id: string;
  title: string;
  tasks: task[];
}


const Cards: FC = () => {

  const loading = useSelector((state: RootState) => {
    return state.blog.loading
  })

  const error = useSelector((state: RootState) => {
    return state.blog.error
  })
  const initialColumns = [
    {
      "title": "Anush",
      "id": "0",
      "tasks": [
        {
          "content": "Task Data",
          "title": "Task Title",
          "comments": [""],
          "id": "0",
          "author": {
            "name": "",
            "image": ""
          }
        }]
    },
    {
      "title": "Anush",
      "id": "1",
      "tasks": [
        {
          "content": "Task Data",
          "title": "Task Title",
          "comments": [""],
          "id": "0",
          "author": {
            "name": "",
            "image": ""
          },
        },
        {
          "content": "Task Data--2",
          "title": "Task Title",
          "comments": [""],
          "id": "1",
          "author": {
            "name": "",
            "image": ""
          },
        }
      ]
    },
    {
      "title": "Anush",
      "id": "2",
      "tasks": [
        {
          "content": "Task Data",
          "title": "Task Title",
          "comments": [""],
          "id": "0",
          "author": {
            "name": "",
            "image": ""
          }
        }]
    },
  ]
  const [columns, setColumns] = useState<column[]>(initialColumns as column[]);

  const [isAddTask, setIsAddTask] = useState<Boolean>(false)
  const [newColNameValue, setNewColNameValue] = useState<string>('')

  const onNewColNamed = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewColNameValue(event.target.value)
  }
  // const addNewCol = async () => {
  //   if (newColNameValue.trim()) {
  //     await dispatch(createColumn({
  //       title: newColNameValue,
  //       tasks: [],
  //       boardId: boardId
  //     }))
  //     if (boardId)
  //       await dispatch(fetchBoard({ boardId }))

  //     setNewColNameValue('')
  //     setIsAddTask(false)
  //   }

  // }
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

            {
              isAddTask ?
                <div className={styles.newColumnOpened}>
                  <input
                    onChange={onNewColNamed}
                    value={newColNameValue}
                    placeholder='Add new Column'
                    type="text" />
                  <button>Create</button>
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