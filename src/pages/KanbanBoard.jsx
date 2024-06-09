import React, { useState } from 'react';
import { Box, Heading, Flex, VStack, Text } from '@chakra-ui/react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialTasks = {
  'todo': [
    { id: '1', content: 'Task 1' },
    { id: '2', content: 'Task 2' },
  ],
  'inProgress': [
    { id: '3', content: 'Task 3' },
  ],
  'done': [
    { id: '4', content: 'Task 4' },
  ],
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const sourceItems = [...sourceColumn];
    const destItems = [...destColumn];
    const [removed] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceItems,
      });
    } else {
      destItems.splice(destination.index, 0, removed);
      setTasks({
        ...tasks,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destItems,
      });
    }
  };

  return (
    <Box p={4}>
      <Heading mb={4}>Kanban Board</Heading>
      <DragDropContext onDragEnd={onDragEnd}>
        <Flex justify="space-between">
          {Object.keys(tasks).map((columnId) => (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <Box
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  bg="gray.100"
                  p={4}
                  borderRadius="md"
                  w="30%"
                >
                  <Heading size="md" mb={4}>
                    {columnId.replace(/([A-Z])/g, ' $1').toUpperCase()}
                  </Heading>
                  <VStack spacing={4}>
                    {tasks[columnId].map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <Box
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            bg="white"
                            p={4}
                            borderRadius="md"
                            boxShadow="md"
                            w="100%"
                          >
                            <Text>{task.content}</Text>
                          </Box>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </VStack>
                </Box>
              )}
            </Droppable>
          ))}
        </Flex>
      </DragDropContext>
    </Box>
  );
};

export default KanbanBoard;