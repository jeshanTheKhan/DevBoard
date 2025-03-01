const color1 = document.getElementById('color1');
        const color2 = document.getElementById('color2');
        const angle = document.getElementById('angle');
        const randomizeBtn = document.getElementById('randomize');
        const output = document.getElementById('output');

        function setGradient() {
            const backgroundStyle = `linear-gradient(${angle.value}deg, ${color1.value}, ${color2.value})`;
            document.body.style.background = backgroundStyle;
            output.textContent = `background: ${backgroundStyle};`;
        }

        function randomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
        }

        color1.addEventListener('input', setGradient);
        color2.addEventListener('input', setGradient);
        angle.addEventListener('input', setGradient);

        randomizeBtn.addEventListener('click', () => {
            color1.value = randomColor();
            color2.value = randomColor();
            angle.value = Math.floor(Math.random() * 361);
            setGradient();
        });

        setGradient();

        