var exec=require('child_process').exec;




exec('node build/merge.js', function(err,stdout,stderr){



	exec('git push',function(err,stdout,stderr){


		//����� �����Ǿ����� Ȯ���ڵ� �ۼ� 
		console.log(err)


	})	
});
