function formatDate(date) 
{
	var d = new Date(date),
		minute = ''+(d.getMinutes());
		hour = ''+(d.getHours());
		day = '' + d.getDate(),
        month = '' + (d.getMonth() + 1),
        year = d.getFullYear();

	if (month.length < 2) 
		{
		month = '0' + month;
		}
    if (day.length < 2) 
		{
		day = '0' + day;
		}
	if (hour.length < 2) 
		{
		hour = '0' + hour;
		}
	if (minute.length < 2) 
        {
		minute = '0' + minute;
		}

    return (day + "/" + month + ", " + hour + " : " + minute);
}