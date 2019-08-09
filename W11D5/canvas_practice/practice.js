document.addEventListener("DOMContentLoaded", function(){
    const canvas = document.getElementById('mycanvas');
    canvas.width = 500;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = 'blue';
    ctx.fillRect(30, 30, 70, 50);

    ctx.beginPath();
    ctx.arc(100, 100, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 3
    ctx.stroke();
    ctx.fillStyle = 'yellow';
    ctx.fill();
    

    ctx.beginPath();
    ctx.arc(200, 200, 50, 0, Math.PI * 2);
    ctx.moveTo(237, 200);

    ctx.arc(200, 200, 35, 0, Math.PI);

    ctx.moveTo(180, 180);
    ctx.arc(180, 180, 5, 0, Math.PI * 2);
    ctx.moveTo(220, 180);
    ctx.arc(220, 180, 5, 0, Math.PI * 2);
    
    ctx.stroke();


});
