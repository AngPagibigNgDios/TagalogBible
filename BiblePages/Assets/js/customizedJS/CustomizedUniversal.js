import os
import re

# ==========================================
# CONFIGURATION
# ==========================================

BOOK_NAME = "genesis"
txt_file = r"D:\Bible\BibleJournal\BiblePages\FileLists.txt"

# ==========================================
# TITLES DATA
# ==========================================
# Note: Pwedeng string "Title" o list ["Title 1", "Title 2"]
english_titles = {
    1: "Creation of Heaven, Earth, and All Life",
    2: "Garden of Eden and Humanity’s Beginning",
    3: "The Fall of Man and First Sin",
    4: "Cain and Abel, First Murder and Legacy",
    5: "Generations from Adam to Noah’s Line",
    6: "Human Wickedness and God’s Flood Warning",
    7: "Noah’s Ark and Worldwide Flood Judgment",
    8: "Flood Subsides, Covenant with Noah Begins",
    9: "God’s Covenant, Rainbow, and Noah’s Sons",
    10: "Nations Descend from Noah’s Three Sons",
    11: "Tower of Babel and Abraham’s Lineage",
    12: "God Calls Abram, Promise of Blessing",
    13: "Abram and Lot Separate, God’s Promise",
    14: "Abram Rescues Lot, Meets Melchizedek",
    15: "God’s Covenant Promise to Abram",
    16: "Hagar and Ishmael, Sarai’s Struggle",
    17: "Covenant of Circumcision, Abram Becomes Abraham",
    18: "Abraham Hosts Angels, Promise of Isaac",
    19: "Destruction of Sodom, Lot’s Escape",
    20: "Abraham and Abimelech, God’s Protection",
    21: "Birth of Isaac, Expulsion of Hagar",
    22: "Abraham Tested, Sacrifice of Isaac",
    23: "Sarah’s Death and Burial in Canaan",
    24: "Isaac and Rebekah’s Marriage Arranged",
    25: "Abraham’s Death, Esau and Jacob’s Birth",
    26: "Isaac’s Life, Covenant Renewed by God",
    27: "Jacob Deceives Isaac, Steals Esau’s Blessing",
    28: "Jacob’s Dream of Ladder to Heaven",
    29: "Jacob Marries Leah and Rachel",
    30: "Jacob’s Children and Growing Prosperity",
    31: "Jacob Leaves Laban, God’s Protection",
    32: "Jacob Wrestles with God, Becomes Israel",
    33: "Jacob Reconciles with Esau Peacefully",
    34: "Dinah’s Story and Shechem’s Revenge",
    35: "Jacob Returns to Bethel, Covenant Renewed",
    36: "Descendants of Esau, Edomite Lineage",
    37: "Joseph’s Dreams and Brothers’ Betrayal",
    38: "Judah and Tamar’s Story of Justice",
    39: "Joseph in Egypt, Temptation and Prison",
    40: "Joseph Interprets Dreams in Prison",
    41: "Joseph Rises to Power in Egypt",
    42: "Brothers Visit Egypt, Joseph Tests Them",
    43: "Joseph’s Brothers Return with Benjamin",
    44: "Joseph Tests Brothers with Silver Cup",
    45: "Joseph Reveals Himself, Family Reunited",
    46: "Jacob’s Family Moves to Egypt",
    47: "Jacob and Joseph in Pharaoh’s Court",
    48: "Jacob Blesses Joseph’s Sons, Ephraim Preferred",
    49: "Jacob Blesses His Twelve Sons",
    50: "Joseph’s Forgiveness and Death in Egypt"
}

tagalog_titles = {
    1: "Paglikha ng Langit, Lupa, at Lahat ng Buhay",
    2: "Halamanan ng Eden at ang Simula ng Sangkatauhan",
    3: "Ang Pagbagsak ng Tao at Unang Kasalanan",
    4: "Cain at Abel, Unang Pagpatay at Pamana",
    5: "Mga Henerasyon mula kay Adan hanggang sa Linya ni Noe",
    6: "Kasamaan ng Tao at Babala ng Diyos sa Baha",
    7: "Ang Arka ni Noe at ang Pandaigdigang Paghatol sa Baha",
    8: "Humaba ang Baha, Nagsimula ang Tipan kay Noe",
    9: "Tipan ng Diyos, Bahaghari, at ang mga Anak ni Noe",
    10: "Nagmula ang mga Bansa sa Tatlong Anak ni Noe",
    11: "Tore ng Babel at ang Linya ni Abraham",
    12: "Tinawag ng Diyos si Abram, Pangako ng Pagpapala",
    13: "Naghiwalay sina Abram at Lot, Pangako ng Diyos",
    14: "Iniligtas ni Abram si Lot, Nakilala si Melquisedec",
    15: "Pangako ng Tipan ng Diyos kay Abram",
    16: "Hagar at Ismael, Ang Pakikibaka ni Sarai",
    17: "Tipan ng Pagtutuli, Si Abram ay Naging Abraham",
    18: "Si Abraham ay Nag-host ng mga Anghel, Pangako ni Isaac",
    19: "Pagkawasak ng Sodoma, Pagtakas ni Lot",
    20: "Si Abraham at Abimelech, Proteksyon ng Diyos",
    21: "Pagsilang ni Isaac, Pagpapalayas kay Hagar",
    22: "Sinubukan si Abraham, Paghain kay Isaac",
    23: "Pagkamatay at Paglilibing ni Sarah sa Canaan",
    24: "Isinaayos ang Kasal nina Isaac at Rebekah",
    25: "Pagkamatay ni Abraham, Ang Kapanganakan nina Esau at Jacob",
    26: "Ang Buhay ni Isaac, Ang Tipang Pinanibago ng Diyos",
    27: "Nilinlang ni Jacob si Isaac, Ninakaw ang Pagpapala ni Esau",
    28: "Ang Panaginip ni Jacob ng Hagdan Patungong Langit",
    29: "Pinagkasal ni Jacob sina Lea at Rachel",
    30: "Ang kay Jacob Mga Bata at Lumalagong Kasaganaan",
    31: "Iniwan ni Jacob si Laban, ang Proteksyon ng Diyos",
    32: "Nakipagbuno si Jacob sa Diyos, Naging Israel",
    33: "Mapayapang Nakipagkasundo si Jacob kay Esau",
    34: "Ang Kwento ni Dina at ang Paghihiganti ni Shechem",
    35: "Bumalik si Jacob sa Bethel, Pinanibago ang Tipan",
    36: "Mga Inapo ni Esau, ang Lipi ng mga Edomita",
    37: "Mga Panaginip ni Jose at ang Pagtataksil ng mga Kapatid",
    38: "Ang Kwento ng Katarungan nina Juda at Tamar",
    39: "Si Jose sa Ehipto, ang Tukso at Bilangguan",
    40: "Ipinaliwanag ni Jose ang mga Panaginip sa Bilangguan",
    41: "Umakyat si Jose sa Kapangyarihan sa Ehipto",
    42: "Binisita ng mga Kapatid ang Ehipto, Sinubukan Sila ni Jose",
    43: "Bumalik ang mga Kapatid ni Jose kasama si Benjamin",
    44: "Sinubukan ni Jose ang mga Kapatid gamit ang Kopang Pilak",
    45: "Ipinakita ni Jose ang Kanyang Sarili, Pamilya Muling Nagkasama",
    46: "Lumipat ang Pamilya ni Jacob sa Ehipto",
    47: "Sina Jacob at Jose sa Korte ng Paraon",
    48: "Binasbasan ni Jacob ang mga Anak ni Jose, Mas Pinili si Efraim",
    49: "Binasbasan ni Jacob ang Kanyang Labindalawang Anak",
    50: "Ang Pagpapatawad at Pagkamatay ni Jose sa Ehipto"
}

# ==========================================
# PROCESS
# ==========================================

with open(txt_file, "r", encoding="utf-8") as f:
    files = f.readlines()

for filepath in files:
    filepath = filepath.strip()
    if not filepath: continue

    filename = os.path.basename(filepath).lower()

    if BOOK_NAME not in filename:
        continue

    if "copy" in filename:
        continue

    match = re.search(r'chapter-(\d+)\.html$', filename)
    if not match:
        continue

    chapter = int(match.group(1))

    # Kunin ang data mula sa dictionaries
    eng_data = english_titles.get(chapter)
    tag_data = tagalog_titles.get(chapter)

    if not eng_data or not tag_data:
        continue

    # TRANSFORM DATA: Kung list ang nilagay mo, gagawin itong string na may <br>
    # Kung string lang, mananatiling string.
    if isinstance(eng_data, list):
        eng_replacement = "<br>".join(eng_data)
    else:
        eng_replacement = eng_data

    if isinstance(tag_data, list):
        tag_replacement = "<br>".join(tag_data)
    else:
        tag_replacement = tag_data

    # Read the file
    with open(filepath, "r", encoding="utf-8") as file:
        html = file.read()

    # PERFORM REPLACEMENTS
    html = html.replace("**INSERTENGLISH**", eng_replacement)
    html = html.replace("**INSERTAGALOG**", tag_replacement)

    # Save the file
    with open(filepath, "w", encoding="utf-8") as file:
        file.write(html)

    print(f"Success: Updated {filename}")

print("\nDONE")