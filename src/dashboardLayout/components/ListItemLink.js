import { Link } from 'react-router-dom';
import { ListItem } from '@mui/material';
import ListItemIcon  from '@mui/material/ListItemIcon';
import  ListItemText  from '@mui/material/ListItemText';

function ListItemLink(props) {
  const { icon, title, to } = props;

  const CustomLink = (props) =>  <Link to={to} {...props} />;

  return (
    <li>
      <ListItem button component={CustomLink}>
        {/* <ListItemIcon>{icon}</ListItemIcon> */}
        <ListItemText primary={title} />
      </ListItem>
    </li>
  );
}

export default ListItemLink;
