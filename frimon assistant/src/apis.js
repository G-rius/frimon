import { HfInference } from "@huggingface/inference/dist/src/index";
    /* const callAPI = () => {
       console.log('callAPI. Hello World!');

       const paragraph = document.getElementById('text-input');
       const text = paragraph.value;

       
     }*/

    const inference = new HfInference("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");

    for await (const chunk of inference.chatCompletionStream({
      model: "meta-llama/Meta-Llama-3.1-8B-Instruct",
      messages: [{ role: "user", content: "What is the capital of France?" }],
      max_tokens: 500,
    })) {
      process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }


    console.log(result);