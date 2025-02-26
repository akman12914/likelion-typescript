// --------------------------------------------------------------------------
// 📌 제네릭 (Generics)
// ⭐️ URL: https://bit.ly/3Tycs8T
// --------------------------------------------------------------------------
// - 제네릭은 하나 이상의 여러 타입으로 작동하는 재사용 가능한 함수 또는 클래스를 정의할 수 있습니다.
// - 처음엔 문법이 생소해 이해하고 사용하는데 어려움이 있지만, 자주 사용되므로 학습이 필요합니다.
// --------------------------------------------------------------------------

// Array<string>
// const element = document.querySelector<HTMLDivElement>('.container');
// const element = document.querySelector('.container') as HTMLSpanElement;

{
  // 명시적인 타입 에너테이션 (Type Annotation)
  // TypeScript 타입 추론 (Type Inference)
  const numbers: Array<number> = [-2, 13, 9];
  const colors: Array<string> = ['제네릭', '함수', '클래스'];

  numbers.push(+'100');
  colors.splice(1, 1, 100 + '');
}
