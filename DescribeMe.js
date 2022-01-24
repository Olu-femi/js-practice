var myName = 'Olufemi'
var occupation = 'QA Engineer'
var placeOfWork = 'VGG'

function DescribeMe(id, occu, pow) {
    console.log(
        `I am ${id}. I am a ${occu} by profession and I work with ${pow}.`
    )
}

DescribeMe(myName,occupation, placeOfWork)