const formatHour = (hour) => {
    return new Date(hour).toLocaleTimeString('pt-Br', {
        hour: '2-digit',
        minute: '2-digit'
    })
}

export default formatHour