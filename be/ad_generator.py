import torch
from transformers import GPT2LMHeadModel, GPT2Tokenizer


class AdGenerator:
    def __init__(self):
        self.model_name = "gpt2"
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.tokenizer = GPT2Tokenizer.from_pretrained(self.model_name)
        self.tokenizer.pad_token = self.tokenizer.eos_token
        self.model = GPT2LMHeadModel.from_pretrained(self.model_name).to(self.device)

    def generate_ads(self, search_data, max_length=256, num_return_sequences=2):
        inputs = self.tokenizer(search_data, return_tensors="pt", padding=True)
        
        input_ids = inputs["input_ids"].to(self.device)
        attention_mask = inputs["attention_mask"].to(self.device)

        output = self.model.generate(
            input_ids=input_ids,
            attention_mask=attention_mask,
            max_length=max_length,
            num_return_sequences=num_return_sequences,
            no_repeat_ngram_size=2,
            do_sample=True,
            top_k=50,
            top_p=0.95,
            early_stopping=True,
        )

        ads = [self.tokenizer.decode(out, skip_special_tokens=True) for out in output]
        return ads
