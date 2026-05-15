import json
import os

# Path to your folder
folder = r"D:\Bible\BiblePages\Assets\js\fuse\miracle"

# Files to process
files = ["NT01.json", "NT02.json", "OT01.json", "OT02.json", "OT03.json", "OT04.json", "OT05.json"]

for filename in files:
    full_path = os.path.join(folder, filename)

    # Load full JSON
    with open(full_path, "r", encoding="utf-8") as f:
        bible_full = json.load(f)

    bible_index = {}

    for book_id, book_data in bible_full.items():
        # Keep metadata
        book_entry = {
            "tesl": book_data.get("tesl"),
            "bke": book_data.get("bke"),
            "bkt": book_data.get("bkt"),
            "bkl": book_data.get("bkl"),
            "chapters": {}
        }

        # For each chapter, store only verse count
        for ch_num, verses in book_data["chapters"].items():
            book_entry["chapters"][ch_num] = len(verses)

        bible_index[book_id] = book_entry

    # Save reduced JSON next to original
    out_name = filename.replace(".json", "_index.json")
    out_path = os.path.join(folder, out_name)

    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(bible_index, f, ensure_ascii=False, indent=2)

    print(f"Created {out_path}")
