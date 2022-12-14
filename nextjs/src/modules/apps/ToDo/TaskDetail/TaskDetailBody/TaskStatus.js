import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import IntlMessages from '@crema/utility/IntlMessages';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import {useDispatch, useSelector} from 'react-redux';
import {onUpdateSelectedTask} from '../../../../../redux/actions';
import PropTypes from 'prop-types';
import {MenuItem} from '@mui/material';

const TaskStatus = ({selectedTask}) => {
  const statusList = useSelector(({todoApp}) => todoApp.statusList);

  const dispatch = useDispatch();

  const onChangeStatus = (event) => {
    const task = selectedTask;
    task.status = event.target.value;
    dispatch(onUpdateSelectedTask(task));
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel id='status-select-outlined-label'>
        <IntlMessages id='common.status' />
      </InputLabel>
      <Select
        labelId='status-select-outlined-label'
        label={<IntlMessages id='common.status' />}
        value={selectedTask.status}
        onChange={(event) => onChangeStatus(event)}
        sx={{
          cursor: 'pointer',
          '& .MuiOutlinedInput-input': {
            paddingBottom: 2.5,
            paddingTop: 2.5,
          },
        }}
      >
        {statusList.map((status) => {
          return (
            <MenuItem
              key={status.type}
              value={status.type}
              sx={{
                padding: 2,
                cursor: 'pointer',
              }}
            >
              {status.name}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TaskStatus;

TaskStatus.propTypes = {
  selectedTask: PropTypes.object.isRequired,
};
