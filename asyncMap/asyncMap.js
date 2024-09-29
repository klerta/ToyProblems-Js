const asyncMap = function(tasks, callback) {
    const results = [];
    let completedTasks = 0;
  
    tasks.forEach((task, index) => {
      task((result) => {
        results[index] = result;
        completedTasks++;
  
        if (completedTasks === tasks.length) {
          callback(results);
        }
      });
    });
  };