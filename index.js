const activityList = {};
        let act_num = 1;
        let inputactivity = '';

        function storeActivities()
        {
            inputactivity = document.querySelector('.input-activity');
            if(inputactivity.value !== '')
            {
                let propertyName = `activity${act_num}`;
                activityList[propertyName] = inputactivity.value;
                act_num++;
                let newActivity = document.createElement('div');
                newActivity.setAttribute('class','newDiv');
                newActivity.innerText = inputactivity.value;
                const activities = document.querySelector('.added-activities');
                activities.appendChild(newActivity);
                inputactivity.value = '';
            }
        }