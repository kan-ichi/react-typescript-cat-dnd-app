import { Draggable } from 'react-beautiful-dnd';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from '@mui/material';
import {
  OpenInNew,
  ContentCopy,
} from '@mui/icons-material';
import ListContent from '../models/ListContent';

export type DraggableListItemProps = {
  listContent: ListContent;
  index: number;
};

const DraggableListItem = ({ listContent, index }: DraggableListItemProps) => {
  return (
    <Draggable draggableId={listContent.id} index={index}>
      {(provided, snapshot) => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
        >
          <ListItemAvatar>
            <Avatar src={listContent.avatarImageUrl} style={{border: 0}} />
          </ListItemAvatar>
          <ListItemText primary={listContent.itemTextPrimary} secondary={listContent.itemTextSecondary} />
          <CopyToClipboard text={listContent.avatarImageUrl}>
            <IconButton>
              <ContentCopy />
            </IconButton>
          </CopyToClipboard>
          <IconButton onClick={() => window.open(listContent.avatarImageUrl, '_blank')}>
              <OpenInNew />
          </IconButton>
        </ListItem>
      )}
    </Draggable>
  );
};

const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
  userSelect: "none",
  padding: 8,
  margin: `0 0 4px 0`,
  background: isDragging ? "rosybrown" : "wheat",
  ...draggableStyle,
});

export default DraggableListItem;
