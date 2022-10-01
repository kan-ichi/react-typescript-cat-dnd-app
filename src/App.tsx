import { useEffect, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { CssBaseline, Container } from '@mui/material';
import ListContent from './models/ListContent';
import * as DragAndDropUtils from './utils/DragAndDropUtils';
import * as ListContentHelpers from './helpers/ListContentHelpers';
import { AppToolbar, Toolbar } from './components/AppToolbar';
import ThemeProvider from './components/ThemeProvider';
import DraggableList from './components/DraggableList';

export default function App() {
  let [listContents, setListContents] = useState<ListContent[]>([]);
  useEffect(() => {
    (async() => {
      if (typeof window !== 'undefined') {
        const contents = await ListContentHelpers.getListContents(10);
        setListContents(contents);
      }
    })()
  }, []);

  const onDragEnd = ({ destination, source }: DropResult) => {
    // dropped outside the list
    if (!destination) return;
    const newItems = DragAndDropUtils.reorder(
      listContents,
      source.index,
      destination.index
    );
    setListContents(newItems);
  };

  return (
    <ThemeProvider>
      <CssBaseline />
      <AppToolbar />
      <Toolbar />
      <Container sx={{ my: 2 }}>
        <DraggableList items={listContents} onDragEnd={onDragEnd} />
      </Container>
    </ThemeProvider>
  );
}
