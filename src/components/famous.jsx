import React from "react";


const poem = [{
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  }]

    const famous = () => {
        return (
            <div>
            {poem.map(poems => (
              <div key={poems.lines}>
             
                <article>
                  {poems.lines.map(poems => (
                    <p key={poems}>{poems} <hr /></p>
                  ))}
                </article>
              </div>
            ))}
          </div>
        )
                   }
                   export default famous;