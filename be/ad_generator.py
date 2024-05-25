import torch
import transformers


class AdGenerator:
    def __init__(self):
        self.device = "cuda" if torch.cuda.is_available() else "cpu"
        self.pipeline = transformers.pipeline(
            "text-generation",
            model="meta-llama/Meta-Llama-3-8B-Instruct",
            model_kwargs={"torch_dtype": torch.bfloat16},
            device=self.device,
        )

    def generate_ads(self, search_data: str, max_length=256, num_return_sequences=2):
        items = search_data.split("\n")
        prefix = "Here's my search history, last is the newest: "

        joined_items = ", ".join(items)

        suffix = "\n\n\nBased on the interests above, I will now let you know which option of the following I am most interested in."
        suffix += "\n1. Basketball Shoes"
        suffix += "\n2. Rolex"
        suffix += "\n3. Sofa"
        suffix += "\n4. Yacht"
        suffix += "\n5. Brave Plugin"
        suffix += "\n6. ETHBerlin Hackathon"
        suffix += "\n7. Vacation in Venezuela"
        suffix += "\n8. Sunglasses"
        suffix += "\nFrom the options 1-6, I'm most interested in number "
        prompt = prefix + joined_items + suffix
        print("prompt", prompt)
        ads: list[str] = [
            r["generated_text"]
            for r in self.pipeline(
                prompt,
                max_new_tokens=1,
                num_return_sequences=num_return_sequences,
            )
        ]
        ads = [ad.removeprefix(prompt) for ad in ads]
        print(ads)

        return ads
