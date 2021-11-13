Turkish Dictionary
============

This resource is a dictionary of Modern Turkish, comprised of the definitions of over 50.000 individual entries. Each entry is matched with its corresponding synset (set of synonymous words and expressions) in the Turkish WordNet, KeNet.

The bare-forms in the lexicon consists of nouns, adjectives, verbs, adverbs, shortcuts, etc. Each bare-form appears the same in the lexicon except verbs. Since the bare-forms of the verbs in Turkish do not have the infinitive affix ‘mAk’, our lexicon includes all verbs without the infinitive affix. The bare-forms with diacritics are included in two forms, with and without diacritics. For example, noun ‘rüzgar’ appear both as ‘rüzgar’ and ‘rüzgâr’.

Special markers are included as bare-forms such as doc, s, etc.

Some compound words are included in their affixed form. For instance, ‘acemlalesi’ appears as it is, but not as ‘acemlale’.

Foreign words, especially proper noun foreign words, are included, so that the system can easily recognize them as proper nouns. For instance, the words ‘abbott’, ‘abbigail’ are example foreign proper nouns. Including foreign proper nouns, there are 19,000 proper nouns in our lexicon.

From derivational suffixes, we only include words which has taken -lI, -sIz, -CI, -lIk, and -CIlIk derivational affixes. For example, the bare-forms ‘abacı’, ‘abdallık’, ‘abdestli’ and ‘abdestlilik’, are included, since they have taken one or more derivational affixes listed above.

Each bare-form has a set of attributes. For instance, ‘abacı’ is a noun, therefore, it includes CL_ISIM attribute. Similarly, ‘abdestli’ is an adjective, which includes IS_ADJ attribute. If the bare-form has homonyms with different part of speech tags, all corresponding attributes are included.

|Name|Purpose|
|---|---|
|CL ISIM, CL FIIL, IS_OA|Part of speech tag(s)|
|IS_DUP|Part of a duplicate form|
|IS_KIS|Abbreviation, which does not obey vowel harmony while taking suffixes.|
|IS_UU, IS_UUU|Does not obey vowel harmony while taking suffixes.|
|IS_BILES|A portmanteau word in affixed form, such as ‘adamotu’|
|IS_B_SI|A portmanteau word ending with ‘sı’, such as ‘acemlalesi’|
|IS_CA|Already in a plural form, therefore can not take plural suffixes such as ‘ler’ or ‘lar’.|
|IS_ST|The second consonant undergoes a resyllabification.|
|IS_UD, IS_UDD, F_UD|Includes vowel epenthesis.|
|IS_KG|Ends with a ‘k’, and when it is followed by a vowel-initial suffix, the final ‘k’ is replaced with a ‘g’.|
|IS_SD, IS_SDD, F_SD|Final consonant gets devoiced during vowel-initial suffixation.|
|F GUD, F_GUDO|The verb bare-form includes vowel reduction.|
|F1P1, F1P1-NO-REF|A verb, and depending on this attribute, the verb can (or can not) take causative suffix, factitive suffix, passive suffix etc.|

For Developers
============

You can also see [Python](https://github.com/starlangsoftware/Dictionary-Py), [Cython](https://github.com/starlangsoftware/Dictionary-Cy), 
[C++](https://github.com/starlangsoftware/Dictionary-CPP), [Swift](https://github.com/starlangsoftware/Dictionary-Swift), 
[Java](https://github.com/starlangsoftware/Dictionary), or [C#](https://github.com/starlangsoftware/Dictionary-CS) repository.
