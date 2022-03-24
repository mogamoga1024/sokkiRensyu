
class QuestionCreater {
    createQuestion(oldQuestion) {
        const questionCharList = Gojuon.selectedCharList;
        
        if (questionCharList.length === 0) return "";

        let newQuestion = questionCharList[Math.randomInt(questionCharList.length)];
        while (questionCharList.length > 1 && oldQuestion === newQuestion) {
            newQuestion = questionCharList[Math.randomInt(questionCharList.length)];
        }
        
        return newQuestion;
    }
}

