// function test_js(msg){
// 	console.log('Log: ' + msg)
// }
// test_js('Nanda is my love')

function html_tag(tag){
	function wrapped_message(msg){
		console.log('<'+ tag +'>' + msg + '</'+ tag +'>')
	}
	return wrapped_message
}

print_h1 = html_tag("h1")
print_h1('I love Nanda')

print_h2 = html_tag("h2")
print_h2('Nanda')
