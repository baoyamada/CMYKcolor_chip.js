/*
説明
イラストレーター用のCMYKカラーチップ生成jsです。
このカラーチップをお使いのプリンターで出力し、参照する事で
データと出力の色合わせが出来ます。

使い方
イラストレーターを開く→ファイル→スクリプト→その他のスクリプト→このファイルを選択し開く
数値が併記されたCMYKカラーチップが展開されます。
それをお使いのプリンターで出力し、お使い下さい。
*/

var docObj = documents.add(DocumentColorSpace.CMYK,500,500);
var nam  = 10;
var array;
var i = 0;//m
var j = 0;//c
var k = 0;//y
var l = 0;//k

for(i=0;k<=nam;k++){
for(i=0;i<=nam;i++){
	for(j=1;j<=nam;j++){
		var pObj = docObj.pathItems.add();
		pObj.filled = false;
		pObj.stroked = true;
		pObj.strokeWidth = 25;
		
		pObj.strokeColor.cyan = j*nam;
		pObj.strokeColor.magenta = i*nam;
		pObj.strokeColor.yellow = 0;
		pObj.strokeColor.black = 0;

		
		var pt = pObj.pathPoints.add();
		pt.leftDirection = [25+(j*50),0-(50*i)];
		pt.anchor = [25+(j*50),0-(50*i)];
		pt.rightDirection = [25+(j*50),0-(50*i)];
		var pt = pObj.pathPoints.add();
		pt.leftDirection = [25+(j*50),25-(50*i)];
		pt.anchor = [25+(j*50),25-(50*i)];
		pt.rightDirection = [25+(j*50),25-(50*i)];

		var textObj = docObj.textFrames.add();
		textObj.contents = "C:"+j*nam;
		textObj.textRange.size = 5;
		textObj.orientation = TextOrientation.HORIZONTAL;		
		textObj.translate(0+(j*50),0-(50*i)+18);
		var textObj = docObj.textFrames.add();
		textObj.contents = "M:"+i*nam;
		textObj.textRange.size = 5;
		textObj.orientation = TextOrientation.HORIZONTAL;		
		textObj.translate(0+(j*50),0-(50*i)+12);

		var textObj = docObj.textFrames.add();
		textObj.contents = "Y:"+k*nam;
		textObj.textRange.size = 5;
		textObj.orientation = TextOrientation.HORIZONTAL;		
		textObj.translate(0+(j*50),0-(50*i)+6);

		var textObj = docObj.textFrames.add();
		textObj.contents = "K:"+l*nam;
		textObj.textRange.size = 5;
		textObj.orientation = TextOrientation.HORIZONTAL;		
		textObj.translate(0+(j*50),0-(50*i));


		}
}
}