const HelloPage = () => {

fetch('http://localhost:3000/hello/api')
                .then(value => value.json())
                .then(value => {
					console.log('fetch start');
					console.log(value, '!!!!');
					console.log('fetch end');
                });

	return (
		<div>hello page</div>
	)
}
export default HelloPage;
