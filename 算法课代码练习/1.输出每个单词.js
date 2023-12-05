//题目：在一段英文中，输出每个单词。如："hello world"。输出:hello,world。
function readWords(sentence) {
  // 初始化两个指针
  let start = 0;
  let end = 0;

  // 用于存储提取出的单词
  const words = [];

  // 循环遍历整个句子
  while (start < sentence.length && end < sentence.length) {
    // 移动 end 指针直到遇到空格或句尾
    while (end < sentence.length && sentence[end] !== ' ') {
      end++;
    }

    // 提取单词并将其加入数组
    const word = sentence.substring(start, end);
    words.push(word);

    // 移动 start 指针到下一个单词的起始位置
    start = end + 1;
    end = end + 1;
  }

  return words;
}

// 示例用法
const sentence = "This is a sample sentence.";
const result = readWords(sentence);
console.log(result);
