
/**
 * This changes the special characters in the label parameter with
 * the mapped value in the values object
 * 
 * @param label This is the initial question text. Special values to be replaced in
 * this string should be written in the form {%filedName%}. 
 * 
 * For example see the questions in packages/web/src/lib/CheckUpTool/static/caregiverQuestions.ts
 * @param values This is an object that contains the user inputs. 
 * @param fieldsToParse The fields to be replaced. 
 */
export const parseTextWithValue = (label: string,values: Record<string,any>, fieldsToParse:string[] = [])=> {
    if(!fieldsToParse.length) return label;
    let finalLabel = label;
    fieldsToParse = Array.from(new Set(fieldsToParse));
    for (const field of fieldsToParse) {
      const regex = new RegExp(`{%${field}%}`, 'g');
      finalLabel = finalLabel.replace(regex, values[field]);
    }
  
    return finalLabel;
  }