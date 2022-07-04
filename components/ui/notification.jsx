
import classes from './notification.module.css';
import  ReactDOM from 'react-dom'
import {motion} from 'framer-motion'
function Notification(props) {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <motion.div className={cssClasses}
    animate={{
      y:0,
      // y1:20
    }}
    transition={{
      type:"spring",
      stiffness:60
    }}
    initial={{
      y:200
    }}
    >
      <h2>{title}</h2>
      <p>{message}</p>
    </motion.div>
  ),document.getElementById('notifications'));
}

export default Notification;
